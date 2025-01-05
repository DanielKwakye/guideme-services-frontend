import './App.css'
import {Button} from "@/components/ui/button.tsx";

function App() {
  return (
      <div className="container mx-auto mt-10 space-y-4">
          <h1 className="text-3xl ">
              Welcome to GuideMe Services
          </h1>
          <div className="flex gap-2">
              <Button>Click me</Button>
              <Button variant="secondary">Click me</Button>
          </div>
      </div>
  )
}

export default App
