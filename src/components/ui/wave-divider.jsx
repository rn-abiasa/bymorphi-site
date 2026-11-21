// Satu tile gelombang yang bisa disambung mulus (tangen di kiri dan kanan sama).
// Dipakai sebagai mask, jadi warnanya diatur lewat kelas Tailwind (mis. bg-background)
// dan bentuk gelombangnya tidak melar di layar lebar.
const tile =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0H1200V60C1000,110 800,110 600,60C400,10 200,10 0,60Z'/%3E%3C/svg%3E\")";

const maskStyle = {
  maskImage: tile,
  WebkitMaskImage: tile,
  maskRepeat: "repeat-x",
  WebkitMaskRepeat: "repeat-x",
  maskSize: "auto 100%",
  WebkitMaskSize: "auto 100%",
  maskPosition: "left top",
  WebkitMaskPosition: "left top",
};

/**
 * WaveDivider
 * Pembatas bergelombang antar section. Bagian atas berisi warna penuh,
 * tepi bawahnya bergelombang.
 *
 * Wajib beri warna lewat className, mis. "bg-background" atau "bg-primary".
 * Atur posisi lewat className juga, mis. "absolute top-0 left-0".
 */
export default function WaveDivider({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      style={maskStyle}
      className={`pointer-events-none h-12 w-full sm:h-16 md:h-24 lg:h-28 ${className}`}
    />
  );
}
