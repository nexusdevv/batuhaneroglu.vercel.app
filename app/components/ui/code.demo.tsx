import { Squares } from "./squares-background"

export function SquaresDemo() {
  return (
    <div className="space-y-8">
      <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#060606]">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#e02f2f" 
          hoverFillColor="#ff3e3e"
        />
      </div>
    </div>
  )
} 