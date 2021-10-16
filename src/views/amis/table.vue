<template>
  <div id="root"> </div>
</template>
<script lang="ts" setup>
  import 'amis/lib/themes/default.css';
  import { onMounted } from 'vue';
  // @ts-ignore
  let amis = amisRequire('amis/embed');
  // 通过替换下面这个配置来生成不同页面
  let amisJSON = {
    title: '表格',
    remark: 'bla bla bla',
    toolbar: [
      {
        type: 'button',
        actionType: 'dialog',
        label: '新增',
        icon: 'fa fa-plus pull-left',
        primary: true,
        dialog: {
          title: '新增',
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
    ],
    body: {
      type: 'crud',
      draggable: true,
      syncLocation: false,
      api: '',
      perPage: 15,
      keepItemSelectionOnPageChange: true,
      maxKeepItemSelectionLength: 11,
      labelTpl: '${id} ${engine}',
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
            text: '这里的表单项可以配置多个',
          },
        ],
      },
      bulkActions: [
        {
          label: '批量删除',
          actionType: 'ajax',
          api: '',
          confirmText: '确定要批量删除?',
        },
        {
          label: '批量修改',
          actionType: 'dialog',
          dialog: {
            title: '批量编辑',
            name: 'sample-bulk-edit',
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
      filterTogglable: true,
      headerToolbar: [
        'filter-toggler',
        'bulkActions',
        {
          type: 'tpl',
          tpl: '表格：当前有 ${count} 条数据。',
          className: 'v-middle',
        },
        {
          type: 'columns-toggler',
          align: 'right',
        },
        {
          type: 'drag-toggler',
          align: 'right',
        },
      ],
      footerToolbar: ['statistics', 'switch-per-page', 'pagination'],
      columns: [
        {
          name: 'id',
          label: 'ID',
          width: 20,
          sortable: true,
          type: 'text',
          toggled: true,
          remark: 'Bla bla Bla',
        },
        {
          name: 'engine',
          label: 'Rendering engine',
          sortable: true,
          searchable: true,
          popOver: {
            body: 'Popover 内容：${platform}',
            trigger: 'hover',
          },
          popOverEnableOn: 'this.id === 1',
          type: 'text',
          toggled: true,
        },
        {
          name: 'browser',
          label: 'Browser',
          sortable: true,
          type: 'text',
          toggled: false,
        },
        {
          name: 'platform',
          label: 'Platform(s)',
          popOver: {
            body: 'Popover 内容：${platform}',
          },
          sortable: true,
          type: 'text',
          toggled: true,
        },
        {
          name: 'version',
          label: 'Engine version',
          quickEdit: true,
          type: 'text',
          toggled: true,
          filterable: {
            options: [
              {
                label: '4',
                value: '4',
              },
              {
                label: '5',
                value: '5',
              },
              {
                label: '6',
                value: '6',
              },
            ],
          },
        },
        {
          type: 'text',
          name: 'grade',
          label: 'CSS grade',
          quickEdit: {
            saveImmediately: true,
            mode: 'inline',
            type: 'select',
            options: ['A', 'B', 'C', 'D', 'X'],
          },
        },
        {
          type: 'operation',
          label: '操作',
          width: 100,
          buttons: [
            {
              type: 'button',
              actionType: 'dialog',
              label: '查看',
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
              actionType: 'drawer',
              drawer: {
                position: 'left',
                size: 'lg',
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
                      type: 'select',
                      name: 'grade',
                      label: 'CSS grade',
                      options: ['A', 'B', 'C', 'D', 'X'],
                    },
                  ],
                },
              },
            },
            {
              type: 'button',
              actionType: 'ajax',
              label: '删除',
              confirmText: '您确认要删除?',
              api: '',
            },
          ],
          toggled: true,
        },
      ],
    },
  };
  onMounted(() => {
    amis.embed('#root', amisJSON);
  });
</script>
