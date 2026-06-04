export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // ဒီမှာ သင် လိုချင်တဲ့ လမ်းကြောင်းအလိုက် Redirect လုပ်နိုင်ပါတယ်
    if (url.pathname === "/sub-KPCHANNEL") {
      return Response.redirect("https://www.kpkey.mytunnel.org/sub?token=bb4898b2d58cd1d794790e866aa915a7", 301);
    }
    
    return new Response("Welcome to my shortener!");
  }
};
