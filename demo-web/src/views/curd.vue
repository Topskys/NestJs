<!--
 * @Author: Topskys
 * @Date: 2022-11-28 11:55:02
 * @LastEditTime: 2022-11-28 14:34:55
-->

<template>
    <div style="padding:0 3% ">
        <div>
            <div>
                <el-input v-model="search.keyWord" style="width:300px;"></el-input>
                <el-button @click="init" style="margin-left:10px;">搜索</el-button>
                <el-button @click="openDialog" type="primary" style="margin-left:10px;">添加</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%;margin-top: 30px;" border>
                <el-table-column prop="id" label="ID" />
                <el-table-column prop="name" label="名字" />
                <el-table-column prop="desc" label="描述" />
                <el-table-column>
                    <template slot-scope="scope">
                        <el-button @click="edit(scope.row)">编辑</el-button>
                        <el-button @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @current-change="changeSize" style="float:right;margin-top:10px;" background
                layout="prev, pager, next" :total="total" />
        </div>

        <el-dialog :visible.sync="dialogVisible" :title="form.id ? '修改' : '新增'" width="50%">
            <el-form :model="form">
                <el-form-item prop="name" label="名称">
                    <el-input v-model="form.name" placeholder="名称" />
                </el-form-item>
                <el-form-item prop="desc" label="描述">
                    <el-input v-model="form.desc" placeholder="描述">
                    </el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="close">关闭</el-button>
                    <el-button type="primary" @click="save">
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script >
import { addCurd, delCurd, getList, updateCurd } from '@/api';
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            search: {
                keyWord: "",
                page: 1,
                pageSize: 10,
            },
            tableData: [],
            dialogVisible: false,
            total: 0,
            form: {
                id: '',
                name: '',
                desc: '',
            }
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
            this.form = {
                id: '',
                name: '',
                desc: ""
            }
        },
        async init() {
            const { status, data } = await getList(this.search);
            status == 200 && (this.tableData = data?.data ?? [], this.total = data?.total ?? 0);
        },
        edit(row) {
            this.form = { ...row };
            // Object.assign(this.from, row);
            this.dialogVisible = true;
        },
        async del(row) {
            const { status, message } = await delCurd(row);
            this.$message({ type: status ? "success" : "error", message: message })
            this.init()
            this.close();
        },
        changeSize(page) {
            this.search.page = page;
            this.init();
        },
        close() {
            this.dialogVisible = false;
        },
        async save() {
            const { status, message } = await (this.form.id ? updateCurd(this.form) : addCurd(this.form));
            this.init();
            this.$message({ type: status ? "success" : "error", message: message })
            this.close();
        },
    }
});
</script>


<style  lang='scss'>

</style>


     
