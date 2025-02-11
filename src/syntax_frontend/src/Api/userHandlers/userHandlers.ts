import api from '../apiServiceSettings';

export interface BioData {
    linkedin?: string;
    marital_status?: string;
    education?: any;
    nationality?: string;
    email?: string;
    summary?: string;
    contact_number?: string;
    address?: string;
    date_of_birth?: string;
    full_name?: string;
    github?: string;
  }

export interface UserInput {
    bio: [] | [BioData];
    plan: string;
  }

export const icServiceUsers = {

  async getSingleUser() {
    try {
      const response = await api.get_single_user();
      if ('Ok' in response) {
        return response.Ok;
      } else if ('Err' in response) {
        console.log('User not found:', response.Err.message);
        return response;
      }
      
      return response;
    } catch (error) {
      console.error('Error in getSingleUser:', error);
      throw error;
    }
  },

  async addNewUser(userInput: any) {
    return await api.add_new_user(userInput);
  },

  async addCreditsToUser() {
    return await api.add_credits_to_user();
  },

  async updateUser(userInput: any) {
    try {
        const response = await api.update_user(userInput);
        return response;
      } catch (error) {
        console.error('Error in updating user:', error);
        throw error;
      }
  },

  async getAllUserProfiles() {
    return await api.get_all_user_profile();
  },
};
