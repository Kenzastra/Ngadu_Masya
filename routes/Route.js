import express from "express";
import {
    getPengaduan,
    getPengaduanById,
    savePengaduan,
    updatePengaduan,
    deletePengaduan,
    getMasyarakat,
    getMasyarakatById,
    saveMasyarakat,
    updateMasyarakat,
    deleteMasyarakat
} from "../Controllers/NgaduController.js";

const router = express.Router();

// Rute Pengaduan
router.get('/pengaduan', getPengaduan);
router.get('/pengaduan/:id', getPengaduanById);
router.post('/pengaduan', savePengaduan);
router.patch('/pengaduan/:id', updatePengaduan);
router.delete('/pengaduan/:id', deletePengaduan);

// Rute Masyarakat
router.get('/masyarakat', getMasyarakat);
router.get('/masyarakat/:id', getMasyarakatById);
router.post('/masyarakat', saveMasyarakat);
router.patch('/masyarakat/:id', updateMasyarakat);
router.delete('/masyarakat/:id', deleteMasyarakat);
export default router;