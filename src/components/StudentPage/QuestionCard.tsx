import { useState } from "react";

function QCard() {
    const [open, setOpen] = useState(false);

    function onOpen(openState : boolean){
        setOpen(openState);
    }

    return (
        <div className="max-w-[1028px] w-full">
            <div className="flex justify-between">
                <h2>01. Who can apply?</h2>
                {!open && (<button onClick={() => onOpen(true)}>button-open</button>)}
            </div>
            {open && (<div className="flex justify-between mt-4">
                <p>Any TMU student, regardless of year, program, or experience level.</p>
                <button className="btn btn-blue" onClick={() => onOpen(false)}>button-close</button>
            </div>
            )}
        </div>
    )
}

export default QCard;