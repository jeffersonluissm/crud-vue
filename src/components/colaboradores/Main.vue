<template>
  <article>
    <header>
      <div class="row">
        <div class="col-md-10">
          <h1>
            Colaboradores
            <a href="" class="btn-add" title="Adicionar colaborador" @click.prevent="showModal('new')"></a>
          </h1>
        </div>
        <div class="col-md-2">
          <input type="search" name="filter" id="inputSearch" placeholder="Filtrar" v-model="search" class="input-search" />
        </div>
      </div>
    </header>
    <main>
      <table class="table table-responsive table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Empresa</td>
            <td class="col-actions">&nbsp;</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e in filteredItens" :key="e.ID">
            <td>
              <a href="#" @click.prevent="showModal('update',e.ID)">{{e.Name}}</a>
            </td>
            <td>
              {{getCompanyById(e.CompaniesID)}}
            </td>
            <td>
              <a href="" class="btn-delete" @click.prevent="deleteEmployee(e.ID)" title="Deletar usuário"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>

  <modal v-if="modal.show" @close="modal.show = false" :title-modal="modal.title" @save="saveModal">
    <div slot="body">
      <form action="#">
        <input type="hidden" id="txtId" v-model="employee.ID">
        <div class="form-group row">
          <label for="txtNome" class="col-md-2 col-md-offset-2 form-label">Nome:</label>
          <div class="col-md-6">
            <input type="text" class="form-control" id="txtNome" v-model="employee.Name">
          </div>
        </div>
        <div class="form-group row">
          <label for="ddlEmpresa" class="col-md-2 col-md-offset-2 form-label">Empresa:</label>
          <div class="col-md-6">
            <select id="ddlEmpresa" class="form-control" v-model="employee.CompaniesID">
              <option value="" disabled>Selecione</option>
              <option v-for="c in companies" :key="c.id" :value="c.ID">{{c.Name}}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </modal>

  </article>
</template>

<script>
import Modal from '@/components/layouts/Modal'

export default {
  data () {
    return {
      search: '',
      employees: [],
      companies: [],
      modal: {
        show: false,
        title: '',
        type: ''
      },
      employee: {
        ID: '',
        Name: '',
        CompaniesID: ''
      }
    }
  },
  components: {
    Modal
  },
  created () {
    this.getCompanies(
      this.getAll()
    )
  },
  computed: {
    filteredItens () {
      let filterKey = this.search && this.search.toLowerCase()
      if (filterKey) {
        return this.employees.filter(item =>
          item.Name.toLowerCase().indexOf(filterKey) > -1
        )
      } else {
        return this.employees
      }
    }
  },
  methods: {
    getCompanyById (id) {
      let c = this.companies.filter(c => c.ID === id)[0]
      return (c !== undefined ? c.Name : '')
    },
    getCompanies (callback) {
      this.$http.get('companies.json').then(response => {
        this.companies = response.body.companies
        if (callback) {
          callback(response)
        }
      })
    },
    getEmployeeById (id) {
      let c = this.employees.find(c => c.ID === id)
      return (c !== undefined ? c : '')
    },
    getAll (callback) {
      this.$http.get('employees.json').then(response => {
        this.employees = response.body.employees
        if (callback) {
          callback(response)
        }
      })
    },
    deleteEmployee (id) {
      let c = this.employees.find(e => e.ID === id)
      this.employees.splice(this.employees.indexOf(c))
      // this.$http.delete('Employees', {body: {
      //   ID: id
      // }}).then(response => {
      //   this.getAll()
      // })
    },
    showModal (type, id = 0) {
      if (type === 'new') {
        this.employee = {}
        this.modal.show = true
        this.modal.type = 'new'
        this.modal.title = 'Novo colaborador'
      } else if (type === 'update') {
        this.modal.show = true
        this.modal.type = 'update'
        this.modal.title = 'Editar colaborador'
        this.employee = this.getEmployeeById(id)
      }
    },
    saveModal () {
      if (this.modal.type === 'new') {
        this.employees.push(this.employee)
        this.modal.show = false
        // delete this.employee.ID
        // this.$http.post('Employees', this.employee).then(response => {
        //   this.getAll()
        //   this.modal.show = false
        // })
      } else if (this.modal.type === 'update') {
        this.$http.put('Employees', this.employee).then(response => {
          this.modal.show = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scope>
  .table{
    .col-actions{
      width: 5%;
    }
  }
</style>
