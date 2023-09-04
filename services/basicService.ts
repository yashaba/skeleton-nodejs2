// services/basic.service.ts
import { BasicData } from '../interfaces/basic.interface';
import { v4 as uuidv4 } from 'uuid';

export class BasicService {
  private data: BasicData[] = [];

  async create(newData: BasicData): Promise<BasicData> {
    const id = uuidv4();
    const createdData: BasicData = {  ...newData, id };
    this.data.push(createdData);
    return createdData;
  }

  async getAll(): Promise<BasicData[]> {
    return this.data;
  }

  async getById(id: string): Promise<BasicData | undefined> {
    return this.data.find((item) => item.id === id);
  }

  async update(id: string, updatedData: BasicData): Promise<BasicData | undefined> {
    const dataIndex = this.data.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      this.data[dataIndex] = { ...this.data[dataIndex], ...updatedData };
      return this.data[dataIndex];
    }
    return undefined;
  }

  async remove(id: string): Promise<BasicData | undefined> {
    const dataIndex = this.data.findIndex((item) => item.id === id);
    if (dataIndex !== -1) {
      const deletedData = this.data.splice(dataIndex, 1);
      return deletedData[0];
    }
    return undefined;
  }
}
