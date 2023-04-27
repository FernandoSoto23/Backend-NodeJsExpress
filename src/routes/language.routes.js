import { Router } from "express";
import { methods as languageControllers } from "../controllers/language.controllers";

const router = Router();

router.get("/api/languages", languageControllers.getLanguages);
router.post("/api/language", languageControllers.addLanguage);
router.get("/api/language/:id", languageControllers.getLanguageById);
router.delete("/api/language/:id", languageControllers.deleteLanguage);
router.put("/api/language/:id", languageControllers.updateLanguage);
export default router;