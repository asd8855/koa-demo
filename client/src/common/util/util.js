export default {
  getParamByName(name) {
    return (
      decodeURIComponent(
        (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(
          location.href
        ) || [, ""])[1].replace(/\+/g, "%20")
      ) || null
    );
  },
  jumpPage (url, time) {
    var fn = function () {
        window.location.href = url;
    };
    if (!time) {
        time = 0;
    }
    setTimeout(fn, time)
  }
}