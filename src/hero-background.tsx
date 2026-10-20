import { createRoot } from "react-dom/client";
import ChromaCurrent from "./backgrounds/chroma-current";

const mount = document.getElementById("hero-chroma-root");
const hero = mount?.closest(".hero-stage");

if (mount && hero) {
  createRoot(mount).render(<ChromaCurrent />);

  // Observe bubbling pointer events without intercepting the existing cards.
  // The decorative layer stays pointer-transparent; only it gets the copies.
  const forwardPointer = (event: PointerEvent) => {
    const surface = mount.firstElementChild;
    if (!surface) return;
    if ((event.type === "pointerdown" || event.type === "pointerup") &&
        (event.target as Element).closest("a,button,input,textarea,select,label,summary,[role=button],[contenteditable=true]")) return;
    surface.dispatchEvent(new PointerEvent(event.type, {
      clientX: event.clientX,
      clientY: event.clientY,
      pointerId: event.pointerId,
      pointerType: event.pointerType,
      isPrimary: event.isPrimary,
      button: event.button,
      buttons: event.buttons,
      bubbles: false,
    }));
  };
  for (const type of ["pointermove", "pointerdown", "pointerup", "pointerleave", "pointercancel"]) {
    hero.addEventListener(type, forwardPointer, { passive: true });
  }
}
