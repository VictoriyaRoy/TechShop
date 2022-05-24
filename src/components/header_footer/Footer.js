import './Footer.css'

const Footer = () => {
    const footerInfo = [
        {title: 'Get in touch', elements: ['About Us', 'Careers', 'Prees Releases', 'Blog']},
        {title: 'Connections', elements: ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn']},
        {title: 'Earings', elements: ['Become an Affliate', 'Advertise your product', 'Sell on Market']},
        {title: 'Account', elements: ['Your account', 'Returns Centre',
            '100 % purchase protection', 'Chat with us', 'Help']}
    ]

    return (
        <footer>
            {
            footerInfo.map((section) =>
            <div className='footSection'>
                <h3>{section.title}</h3>
                {section.elements.map((elem) => <span>{elem}</span>)}
            </div>
            )}
        </footer>
    );
}

export default Footer