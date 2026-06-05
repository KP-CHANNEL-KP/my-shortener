export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // ဒီမှာ သင် လိုချင်တဲ့ လမ်းကြောင်းအလိုက် Redirect လုပ်နိုင်ပါတယ်
    if (url.pathname === "/KPCHANNEL346") {
      return Response.redirect("https://www.kpkey.mytunnel.org/sub?token=6d7bddae7a6c9b731dcd306836c22674", 301);
    }
    
    return new Response("Welcome to my shortener!");
  }
};
