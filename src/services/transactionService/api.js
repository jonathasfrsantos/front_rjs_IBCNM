import axios from "axios";

const baseUrl = "http://localhost:8080/transactions"; // criar uma constante da URL da API servidor

export const api = {
  async getAllByDate() {
    try {
      const response = await axios.get(`${baseUrl}/by-date`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getRevenues() {
    try {
      const response = await axios.get(`${baseUrl}/getTotalEntradas`)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getSaidas(){
    try{
      const response = await axios.get(`${baseUrl}/getTotalSaidas`)
      return response.data;
    }catch (error) {
      console.error(error);
    }
  },

  async create(data) {
    try {
      const response = await axios.post(`${baseUrl}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async delete(id) {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  
  async update(id, data){
    try {
      const response = await axios.put(`${baseUrl}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      
    }
  },

  async getAllDefault(){
    try {
      const response = await axios.get(`${baseUrl}/getByCurrentMonth`);
      return response.data
    } catch (error) {
      console.error(error);
      
    }
  },

  async getAllSelectedPeriod(dataInicial, dataFinal) {
    try {
      const response = await axios.get(`${baseUrl}/getByDateInterval`, {
        params: {
          dataInicial: dataInicial,
          dataFinal: dataFinal
        }
      });
      return response.data;
      
    } catch (error) {
      console.error(error);
      
    }
  },
  async getAllTithes(){
    try {
      const response = await axios.get(`${baseUrl}/getAllDizimos`);
      return response.data
    } catch (error) {
      console.error(error)
      
    }
  }


};