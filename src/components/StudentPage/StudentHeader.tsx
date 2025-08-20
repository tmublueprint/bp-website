import GenericButton from "../GenericButton";
function StudentHeader() {

    return (
        <div className="flex flex-col mb-[179.3px] mt-[102.4px]">
            <h1 className="font-['Poppins'] font-bold text-[55.3px] text-[#333]">Students</h1>
            <div className="font-['Poppins'] max-w-[843.3px] text-[20px] mt-5 text-[#333] student-header-small">
                At Blueprint, we welcome students from all years, programs, and levels of experience at TMU. Whether you're
                 interested in leading projects or developing tech solutions, we offer opportunities to work on impactful
                  initiatives with nonprofits. Join us to gain real-world experience, build your skills, and make a meaningful difference.
            </div>
            <div className="flex justify-start mt-[3rem]">
                <GenericButton 
                    label="Apply Now" 
                    style={{ 
                        marginLeft: "0", 
                        background: "linear-gradient(90deg, #94c9ff, #76b7fb, #489cf4, #2788f0, #137ced, #0c78ec)",
                        color: "white"
                    }}
                />
            </div>
        </div>
    )
}

export default StudentHeader;