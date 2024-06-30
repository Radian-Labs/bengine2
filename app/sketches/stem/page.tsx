
import { stem, noiseTextures } from "../../api/images"
import StemSketch from "./StemSketch"

export default function StemSketchPage() {
  return <StemSketch imgs={ stem } noise={ noiseTextures } />
}

