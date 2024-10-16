const BASE_URL = "https://rickandmortyapi.com/api"
import { Character, UseApiCall } from "@/models"
import { loadAbort } from "@/utilities"
import axios from "axios"

export const getCharacter = (id: number): UseApiCall<Character, number> => {
  const controller = loadAbort();

  return {
    call: axios.get<Character>(`${BASE_URL}/characters/${id}`, { signal: controller.signal }),
    controller
  };
}

export const newCharacter = (character: Character): UseApiCall<null, Character> => {
  const controller = loadAbort();

  return {
    call: axios.post<null>(`${BASE_URL}/characters`, character, { signal: controller.signal }),
    controller
  }
}

