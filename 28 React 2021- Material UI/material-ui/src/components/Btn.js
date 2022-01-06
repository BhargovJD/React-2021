import React from 'react'
import Button from "@mui/material/Button"

export default function Btn() {
    return (
        <div>
                <Button variant="text">Text</Button>
                <Button variant="contained" >Contained</Button>
                <Button start={<SaveIcon></SaveIcon>} variant="outlined">Outlined</Button>

        </div>
    )
}
