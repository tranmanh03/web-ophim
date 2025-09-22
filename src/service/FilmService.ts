import https from "@/constants/https";

export const FilmService = {
  getListPhimV1: (page: number) => {
    return https.get(`danh-sach/phim-moi-cap-nhat?page=${page}`);
  },
  getListPhimV2: (page: number) => {
    return https.get(`danh-sach/phim-moi-cap-nhat-v2?page=${page}`);
  },
  getListPhimV3: (page: number) => {
    return https.get(`danh-sach/phim-moi-cap-nhat-v3?page=${page}`);
  },
  getFilmInfo: (name: string) => {
    return https.get(`phim/${name}`);
  },
  getFilmInfoByTMDBID: (type: string, id: number) => {
    return https.get(`tmdb/${type}/${id}`);
  },
  getListFilmAvailable: (
    type_list: string,
    page: number,
    sort_field: string,
    sort_type: string,
    sort_lang: string,
    category: string,
    country: string,
    year: number,
    limit: number
  ) => {
    return https.get(
      `v1/api/danh-sach/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&country=${country}&year=${year}&limit=${limit}`
    );
  },
  searchFilm: (
    keyword: string,
    page: number,
    sort_field: string,
    sort_type: string,
    sort_lang: string,
    category: string,
    country: string,
    year: number,
    limit: number
  ) => {
    return https.get(
      `v1/api/tim-kiem?keyword=${keyword}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&country=${country}&year=${year}&limit=${limit}`
    );
  },
  getAllCategory: () => {
    return https.get("the-loai");
  },
  getDetailCategory: (
    page: number,
    sort_field: string,
    sort_type: string,
    sort_lang: string,
    type_list: string,
    country: string,
    year: number,
    limit: number
  ) => {
    return https.get(
      `v1/api/the-loai/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&country=${country}&year=${year}&limit=${limit}`
    );
  },
  getAllCountry: () => {
    return https.get("quoc-gia");
  },
  getDetailCountryFilm: (
    page: number,
    sort_field: string,
    sort_type: string,
    sort_lang: string,
    type_list: string,
    country: string,
    category: string,
    year: number,
    limit: number
  ) => {
    return https.get(
      `v1/api/quoc-gia/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&country=${country}&year=${year}&limit=${limit}`
    );
  },
  getFilmByYear: (
    page: number,
    sort_field: string,
    sort_type: string,
    sort_lang: string,
    year: string,
    country: string,
    category: string,
    limit: number
  ) => {
    return https.get(
      `v1/api/nam/${year}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&country=${country}&limit=${limit}`
    );
  },
  convertImageToWEBP: (url: string) => {
    return https.get(`https://phimapi.com/image.php?url=${url}`);
  },
};
