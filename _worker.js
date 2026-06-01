export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // ဒီမှာ သင် လိုချင်တဲ့ လမ်းကြောင်းအလိုက် Redirect လုပ်နိုင်ပါတယ်
    if (url.pathname === "/sub") {
      return Response.redirect("https://www.kpkey.mytunnel.org/sub?token=cce819586db7d144f6dd4f81aa71c09b", 301);
    }
    
    return new Response("Welcome to my shortener!");
  }
};
