import api from "../apiServiceSettings";

export const icServiceCV = {
  async analyzeCvData(cvData: { cv_template: string; cv_text: string; job_description: string }) {
    try {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Request timed out")), 30000);
      });

      const apiPromise = api.analyze_cv(cvData);

      const response: any = await Promise.race([apiPromise, timeoutPromise]);

      if ("Ok" in response) {
        return response.Ok;
        // // Combine the result from local storage and API response
        // const combinedData = {
        //   ...response.Ok,
        //   localStorageData: JSON.parse(localStorage.getItem('cvData') || '{}') // Assuming 'cvData' is saved in localStorage
        // };
        // return combinedData;
      } else if ("Err" in response) {
        throw new Error(response.Err.message);
      }
      return response;
    } catch (error: any) {
      console.error("Error in CV analysis:", error);
      if (error.message === "Request timed out") {
        throw new Error("CV analysis took too long. Please try again.");
      }
      throw error;
    }
  },

  async fetchCVAnalysis(id: string, body: any) {
    return await api.fetch_cv_analysis(id, body);
  },

  async getAllCVAnalysisForIdentity() {
    return await api.get_all_cv_analysis_for_identity();
  },

  async updateCVAnalysis(id: string, cvInput: { cv_template: string; cv_text: string; job_description: string }, analysisResult: any) {
    return await api.update_cv_analysis(id, cvInput, analysisResult);
  },

  async deleteCVAnalysis(id: string) {
    return await api.delete_cv_analysis(id);
  },
};

