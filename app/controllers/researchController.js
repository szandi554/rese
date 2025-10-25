/*
* File: researchController.js
* Author: Siegenthaler Alexandra 
* Copyright: 2025, Siegenthaler Alexandra 
* Group: Szoft II/2/E
* Date: 2025-10-23
* Github: Siegenthaler Alexandra
* Licenc: MIT
*/

const ResearchController = {
    index:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "read",
            endpoint: "/api/research"
        })
    },
    store:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "create",
            endpoint: "/api/research"
        })
    },
    update:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "update",
            endpint: "/api/research"
        })
    },
    destroy:(req, res) =>{
        res.json({
            name: "Siegenthaler Alexandra, II-E-2, 2025-10-23",
            success: true,
            crud: "delete",
            endpoint: "/api/research"
        })
    }
}

export default ResearchController