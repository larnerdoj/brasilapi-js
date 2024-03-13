import { get } from "../service/api.service";
import { CepV1, CepV2 } from "../types/cep";
import { onlyNumbers } from "../utils/format";

const endpointV1 = "/cep/v1/";
const endpointV2 = "/cep/v2/";

export const getBy = (cep: string, version: string = "v2") => {
  if (version === "v2") {
    return get<CepV2>(endpointV2 + onlyNumbers(cep));
  } else {
    return get<CepV1>(endpointV1 + onlyNumbers(cep));
  }
};
