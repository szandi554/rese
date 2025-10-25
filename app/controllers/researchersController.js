/*
* File: rese.js
* Author: Siegenthaler Alexandra 
* Copyright: 2025, Siegenthaler Alexandra 
* Group: Szoft II/2/E
* Date: 2025-10-23
* Github: Siegenthaler Alexandra
* Licenc: MIT
*/

const ResearchersController = {
    index:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "read",
            endpoint: "/api/researchers"
        })
    },
    store:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "create",
            endpoint: "/api/researchers"
        })
    },
    update:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "update",
            endpoint: "/api/researchers"
        })
    },
    destroy:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "delete",
            endpoint: "/api/researchers"
        })
    }
}
export default ResearchersController