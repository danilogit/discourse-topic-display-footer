import { withPluginApi } from "discourse/lib/plugin-api";
import Mobile from "discourse/lib/mobile";


export default {
  name: "topic-display-footer",
  initialize() {
    withPluginApi("0.8.41", api => {
      try {
        api.decorateCookedElement(
          (post, helper) => {

            console.log("POST", post);
            const topic_footer_html =  settings.footer_html;
            const cooked = $(post,"#post_1"); //$(".regular .contents")[0]; //$(post,"#post_1")
            
            cooked.append(topic_footer_html);

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
