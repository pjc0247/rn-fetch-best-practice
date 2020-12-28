export const createResponse = (response: any) => {
  return Promise.resolve(
    {
      status: 200,
      json: (): Promise<any> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 300);
        });
      },
    }
  );
};

export const fetch = (path: string) => {
  console.log(`fetch - ${path}`);

  if (path === '/posts') {
    return createResponse(['안녕하세요', '게시물제목제목제목', 'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ', 'ㅋㅋㅋㅋㅋㅋ']);
  }
  return createResponse('');
};