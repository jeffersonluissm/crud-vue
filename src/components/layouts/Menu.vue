<template>
  <nav class="menu">
      <div class="container">
        <div class="row">
          <ul class="list-unstyled">
            <li>
              <router-link to="/">Colaboradores</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'app-nav'
}
</script>

<style lang="scss" scope>
  nav.menu{
    background: #253f50;
    padding: 15px 0 10px;

    .container{
      padding: 0 35px;
    }

    ul{
      overflow: hidden;
      padding: 0 15px;
    }

    li{
      float: left;
      margin-right: 35px;

      a{
        color: #e2e2e2;
        font-weight: bold;
        font-size: 11px;
        padding-top:27px;
        display: inline-block;
        text-decoration: none !important;
        &:hover{
          opacity: 0.8;
        }
      }

      &:first-child a{
        background: url('../../assets/img/ico-user.png') no-repeat top center;
      }
      &:nth-child(2) a{
        background: url('../../assets/img/ico-phone.png') no-repeat top center;
      }
    }
  }
</style>
