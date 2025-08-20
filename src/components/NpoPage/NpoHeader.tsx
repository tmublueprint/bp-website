import GenericButton from "../GenericButton";

function NpoHeader() {
    return (
        <div className="flex flex-col mb-[179.3px] mt-[102.4px]">
            <h1 className="font-['Poppins'] font-bold text-[55.3px] text-[#333]">Non-profit</h1>
            <div className="font-['Poppins'] max-w-[843.3px] text-[20px] student-header-small mt-5 text-[#333]">
                We partner with nonprofits to build custom tech solutions that drive real impact.
                 Our student-led teams work closely with organizations to understand their needs
                  and develop accessible, open-source tools. If your nonprofit could benefit from a
                   digital solution, we'd love to collaborate!
            </div>
            <div className="flex justify-start mt-[3rem]">
                <GenericButton 
                    label="Contact Us" 
                    style={{ 
                        marginLeft: "0",
                        background: "linear-gradient(90deg, #94c9ff, #76b7fb, #489cf4, #2788f0, #137ced, #0c78ec)",
                        color: "white"
                    }}
                    to="/contact"
                />
            </div>
        </div>
    )
}

export default NpoHeader;