import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 200,
  duration: '4m',
};

export default function () {
  const res = http.get(
    'https://eshop-api-poland-paul.azurewebsites.net/api/catalog-items?pageSize=10&pageIndex=0'
  );

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
