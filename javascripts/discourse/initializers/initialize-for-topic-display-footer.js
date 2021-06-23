import { withPluginApi } from "discourse/lib/plugin-api";
import Mobile from "discourse/lib/mobile";

let firstPost = true;

export default {
  name: "topic-display-footer",
  initialize() {
    withPluginApi("0.8.41", api => {
      try {
        api.decorateCookedElement(
          (post, helper) => {

            
            const topic_footer_html =  settings.footer_html;
            const cooked = $(post,"#post_1"); //$(".regular .contents")[0]; //$(post,"#post_1")
            
            if (firstPost) {
               cooked.append(topic_footer_html);
               firstPost = false;
            } else {
               firstPost = true;
            }
              

          },
          {
            id: "topic-display-footer",
            onlyStream: true
          }
        );
      } catch (error) {
        
        console.error(error);
      }
    });
  }
};
