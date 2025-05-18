import { renderHook, act } from "@testing-library/react";
import useComponent from "./useComponent";
import { toast } from "sonner";

// Mock de toast
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
  },
}));

// Mock de trpc
const mutateMock = jest.fn();
const invalidateMock = jest.fn();

jest.mock("@/lib/trpc/client", () => ({
  trpc: {
    useUtils: () => ({
      shape: {
        getAll: { invalidate: invalidateMock },
      },
    }),
    shape: {
      create: {
        useMutation: () => ({
          mutate: mutateMock,
        }),
      },
    },
    ai: {
      suggestColor: {
        useMutation: () => ({
          mutate: jest.fn((_, { onSuccess }) =>
            onSuccess?.({ color: "#abcdef" })
          ),
        }),
      },
    },
  },
}));

describe("useComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should disable save when fields are empty", () => {
    const { result } = renderHook(() => useComponent());
    expect(result.current.isSaveDisable).toBe(true);
  });

  it("should call mutate on handleSubmit with the correct data", () => {
    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.setColor("#ff0000");
      result.current.setSize(10);
      result.current.setType("circle");
    });

    act(() => {
      result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });

    expect(mutateMock).toHaveBeenCalledWith({
      type: "circle",
      color: "#ff0000",
      size: 10,
    });
  });

  it("should set color with fallback when suggestColor is called", async () => {
    const { result } = renderHook(() => useComponent());

    await act(async () => {
      await result.current.handleSuggestColor();
    });

    expect(result.current.color).toBe("#abcdef");
  });

  it("should show toast warning for invalid color", () => {
    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.handleColorChange("invalid-color");
    });

    expect(toast.warning).toHaveBeenCalledWith(
      "The color format is not correct. use an hex like: #ff0000"
    );
  });

  it("should not disable save when color is valid, size > 0, and type is set", () => {
    const { result } = renderHook(() => useComponent());

    act(() => {
      result.current.setColor("#123456");
      result.current.setSize(12);
      result.current.setType("square");
    });

    expect(result.current.isSaveDisable).toBe(false);
  });
});
