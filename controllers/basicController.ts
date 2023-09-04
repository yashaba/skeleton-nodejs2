// controllers/basic.controller.ts
import { Request, Response } from 'express';
import { BasicService } from '../services/basicService';
import { BasicData } from '../interfaces/basic.interface';

export class BasicController {
  constructor(private basicService: BasicService) {}

  async create(req: Request, res: Response) {
    try {
      const newData: BasicData = req.body;
      const createdData = await this.basicService.create(newData);
      res.status(201).json(createdData);
    } catch (error) {
      res.status(500).json({ error: error?.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allData = await this.basicService.getAll();
      res.json(allData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await this.basicService.getById(id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updatedData: BasicData = req.body;
      const data = await this.basicService.update(id, updatedData);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await this.basicService.remove(id);
      if (deletedData) {
        res.json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
