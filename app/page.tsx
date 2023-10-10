import { SunIcon } from "@heroicons/react/24/solid"
import { BoltIcon } from "@heroicons/react/24/outline"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

function HomePage () {
  return (
    <div className="flex flex-col items-center justify-center h-screen 
    px-2 text-[#1e997b]">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-4 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8 text-[#f1791e]" />
            <h2>Examples:</h2>
          </div>
          
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"Why is the sky blue?"</p>
            <p className="infoText">"How do I make a homemade Pumpkin Pie?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8 text-[#f1791e]" />
            <h2>Capabilities:</h2>
          </div>
          
          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT model to use</p>
            <p className="infoText">Messeges are stored in Firebase's Firestore</p>
            <p className="infoText">Hot Toast notifications when ChatGPT is thinking</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8 text-[#f1791e]" />
            <h2>Limitations:</h2>
          </div>
          
          <div className="space-y-2">
            <p className="infoText">ChatGPT may occasionally generate incorrect information</p>
            <p className="infoText">May occasionally produce harmful instructions or biased content</p>
            <p className="infoText">Limited knowledge of world events post 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

