// src/common/dto/pagination-response.dto.ts
export class PaginationResponseDto<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}