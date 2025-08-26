import Glass from '../assets/images/glass.webp';

function ErrorPage() {
    return (
        <div className='Vector-bg-contact'>
            <div className="min-h-screen flex items-center justify-center p-8 gap-[192px]">
                <img src={Glass} className="hide-error"/>
                <div className="flex flex-col">
                    <h1 className="text-[55.3px] font-bold color-[#333] mb-[19px]">404: Page Not Found</h1>
                    <span className="flex justify-end color-[#333] text-[20px]">Looks like the page you're looking for doesn't exist.</span>
                    <span className="flex justify-end color-[#333] text-[20px]">Try heading back to the homepage.</span>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;