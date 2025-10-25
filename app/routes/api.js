/*
* File: api.js
* Author: Siegenthaler Alexandra 
* Copyright: 2025, Siegenthaler Alexandra 
* Group: Szoft II/2/E
* Date: 2025-10-23
* Github: Siegenthaler Alexandra
* Licenc: MIT
*/

import  Router from 'express'
import researchController from '../controllers/researchController.js'
import researchersController from '../controllers/researchersController.js'
const router = Router()

router.get('/research', researchController.index)
router.post('/research', researchController.store)
router.put('/research', researchController.update)
router.delete('/research', researchController.destroy)


router.get('/researchers', researchersController.index)
router.post('/researchers', researchersController.store)
router.put('/researchers', researchersController.update)
router.delete('/researchers', researchersController.destroy)

export default router
