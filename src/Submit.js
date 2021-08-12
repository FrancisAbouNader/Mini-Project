import React from 'react'
import SelectBox from './SelectBox'

export default function Submit() {
    return (
        <div>
            <form>
                <SelectBox />
                <div className="text-center">
                <button type="button" className="btn btn-primary btn-sm center-block"  >Save</button>
                </div>
            </form>
            
        </div>
    )
}
