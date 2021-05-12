// 超时60秒
window.axios.defaults.timeout = 1000 * 690;
  window.axios.defaults.withCredentials = true;
  window.axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // 返回状态判断
  window.axios.interceptors.response.use(
    (response) => {
      let res = response.data;
      if (res.code === 401) {
        window.location.href = "#/login";
      }
      return response;
    },
    (error) => {
      console.log("------ Request Error ------");
      console.log(error);
      let msg = error.message;
      if (msg.indexOf("timeout") > -1) {
        // ELEMENT.Message({
        //   type: "error",
        //   duration: 0,
        //   showClose: true,
        //   message: `请求超时，请稍后重试～`,
        // });
      } else {
        // ELEMENT.Message({ type: "error", message: msg });
      }
      return Promise.reject(error);
    }
  );