  <template>
   <div class="md-layout-item md-small-size-100">
          <div class="title">
            <h3>Modal</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-xsmall-size-100">
              <md-button
                class="md-round md-block"
                @click="classicModal = true"
              >
                <md-icon>library_books</md-icon> Classic
              </md-button>
              <div
                class="modal modal-bg"
                :class="{ show: classicModal }"
              >
                <modal
                  v-if="classicModal"
                  @close="classicModal = false"
                >
                  <template slot="header">
                    <h4 class="modal-title">
                      Modal Title
                    </h4>
                    <md-button
                      class="md-simple md-close md-just-icon md-round modal-default-button"
                      @click="classicModal = false"
                    >
                      <md-icon>clear</md-icon>
                    </md-button>
                  </template>

                  <template slot="body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth. Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                  </template>

                  <template slot="footer">
                    <md-button class="md-simple">
                      Nice Button
                    </md-button>
                    <md-button
                      class="md-danger md-simple"
                      @click="classicModal = false"
                    >
                      Close
                    </md-button>
                  </template>
                </modal>
              </div>
            </div>
          </div>
   </div>
 </template>
 <script>
import { Modal} from "@/components";

export default {
  components: {
    Modal
  },
  data() {
    return {
      classicModal: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.d-flex {
  display: flex;
  width: 100%;
}
.justify-content-center {
  justify-content: center;
}

.button-container .mt-3 {
  margin-top: 3rem;
}
</style>
