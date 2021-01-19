<template>
  <div justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs"
          v-on="on">
          <v-icon>mdi-lead-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">
            {{ title }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="タスク名" v-model="name" required autofocus>
                  {{ name }}
                </v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="タグ名" v-model="tag">
                  {{ tag }}
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">閉じる</v-btn>
          <v-btn color="blue darken-1" text @click="submitData">追加</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      name: '',
      tag: ''
    }),
    props: {
      title: String,
      taskName: String,
      tagName: String
    },
    methods:{
      submitData: function(){
        this.dialog = false
        this.$emit('inputData',this.name,this.tag)
        this.clearForm()
      },
      clearForm: function() {
        this.name = null
        this.tag = null
      }
    },
    watch: {
        taskName: { // 外からプロパティの中身が変更になったら実行される
            immediate: true,
            handler(value) {
                this.name = value;
            }
        },
        tagName: { // 外からプロパティの中身が変更になったら実行される
            immediate: true,
            handler(value) {
                this.tag = value;
            }
        }
    }
  }
</script>