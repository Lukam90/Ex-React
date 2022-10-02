import { useState } from 'react'

import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (! inputValue.includes("@")) {
            // email non valide
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>

			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>

            <input
                placeholder="Entrez votre mail"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
            />
		</footer>
	)
}

export default Footer