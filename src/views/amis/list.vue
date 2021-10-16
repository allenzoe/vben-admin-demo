<template>
  <div class="p-4">
    <section id="root"></section>
  </div>
</template>
<script lang="ts" setup>
  import 'amis/lib/themes/default.css';
  import { onMounted } from 'vue';
  // @ts-ignore
  let amis = amisRequire('amis/embed');
  // 通过替换下面这个配置来生成不同页面
  let amisJSON = {
    title: '增删改查示例',
    remark: 'bla bla bla',
    body: {
      type: 'crud',
      syncLocation: false,
      api: '',
      mode: 'list',
      draggable: true,
      saveOrderApi: {
        url: '',
      },
      orderField: 'weight',
      filter: {
        title: '条件搜索',
        submitText: '',
        body: [
          {
            type: 'input-text',
            name: 'keywords',
            placeholder: '通过关键字搜索',
            addOn: {
              label: '搜索',
              type: 'submit',
            },
          },
          {
            type: 'plain',
            text: '这只是个示例, 目前搜索对查询结果无效.',
          },
        ],
      },
      bulkActions: [
        {
          label: '批量删除',
          actionType: 'ajax',
          api: '',
          confirmText: '确定要批量删除?',
          type: 'button',
          level: 'danger',
        },
        {
          label: '批量修改',
          actionType: 'dialog',
          level: 'info',
          type: 'button',
          dialog: {
            title: '批量编辑',
            body: {
              type: 'form',
              api: '',
              body: [
                {
                  type: 'hidden',
                  name: 'ids',
                },
                {
                  type: 'input-text',
                  name: 'engine',
                  label: 'Engine',
                },
              ],
            },
          },
        },
      ],
      quickSaveApi: '',
      quickSaveItemApi: '',
      headerToolbar: ['bulkActions'],
      footerToolbar: ['load-more'],
      listItem: {
        actions: [
          {
            type: 'button',
            label: '查看',
            actionType: 'dialog',
            dialog: {
              title: '查看',
              body: {
                type: 'form',
                body: [
                  {
                    type: 'static',
                    name: 'engine',
                    label: 'Engine',
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'static',
                    name: 'browser',
                    label: 'Browser',
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'static',
                    name: 'platform',
                    label: 'Platform(s)',
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'static',
                    name: 'version',
                    label: 'Engine version',
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'static',
                    name: 'grade',
                    label: 'CSS grade',
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'html',
                    html: '<p>添加其他 <span>Html 片段</span> 需要支持变量替换（todo）.</p>',
                  },
                ],
              },
            },
          },
          {
            type: 'button',
            label: '编辑',
            actionType: 'dialog',
            dialog: {
              title: '编辑',
              body: {
                type: 'form',
                name: 'sample-edit-form',
                api: '',
                body: [
                  {
                    type: 'input-text',
                    name: 'engine',
                    label: 'Engine',
                    required: true,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'input-text',
                    name: 'browser',
                    label: 'Browser',
                    required: true,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'input-text',
                    name: 'platform',
                    label: 'Platform(s)',
                    required: true,
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'input-text',
                    name: 'version',
                    label: 'Engine version',
                  },
                  {
                    type: 'divider',
                  },
                  {
                    type: 'input-text',
                    name: 'grade',
                    label: 'CSS grade',
                  },
                ],
              },
            },
          },
          {
            type: 'button',
            label: '删除',
            actionType: 'ajax',
            confirmText: '您确认要删除?',
            api: '',
          },
        ],
        body: [
          {
            name: 'engine',
            label: 'Rendering engine',
            sortable: true,
            quickEdit: true,
            labelClassName: 'w-sm pull-left text-muted',
          },
          {
            type: 'hbox',
            columns: [
              {
                name: 'browser',
                label: 'Browser',
                labelClassName: 'w-sm pull-left text-muted',
              },
              {
                name: 'platform',
                label: 'Platform(s)',
                labelClassName: 'w-sm pull-left text-muted',
              },
            ],
          },
          {
            name: 'version',
            label: 'Engine version',
            labelClassName: 'w-sm pull-left text-muted',
          },
        ],
      },
    },
  };
  onMounted(() => {
    amis.embed('#root', amisJSON);
  });
</script>
