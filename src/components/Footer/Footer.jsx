import './Footer.css'

export const Footer = () => {
  return (
    <>
    
    <div className="container flex content-around gap-[5%] bg-slate-100 py-12 max-w-[80%] mx-[10%] rounded-xl mb-2">

        <div className="logo text-3xl font-bold">
                <h1>Your<span className='text-orange-600'>LOGO</span></h1>
        </div>

        <div className="options flex items-center content-center gap-14">

            <ul className="resources">
              <li className="font-bold">Resources</li>
              <li>Home</li>
              <li>Contact</li>
            </ul>

            <ul className="follow">
               <li className="font-bold">Follow-Us</li>
               <li>Githubg</li>
               <li>Discord</li>
            </ul>

            <ul className="legal">
                <li className="font-bold">Legal</li>
                <li>Privacy policy</li>
                <li>Terms and conditions</li>
            </ul>

        </div>

    </div>
    
    </>
  )
}
