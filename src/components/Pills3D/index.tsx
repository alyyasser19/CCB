"use client";
import Spline from "@splinetool/react-spline";

interface Props {
  setLoading: (loading: boolean) => void;
}

export default function App({ setLoading }: Props) {
  return (
    <div className="absolute h-screen m-auto w-full -z-50">
      <Spline
        onLoad={() => {
          setLoading(false);
        }}
        scene="https://prod.spline.design/XPpiFJ3W3SHlOKiw/scene.splinecode"
      />
    </div>
  );
}
