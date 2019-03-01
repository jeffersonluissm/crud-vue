<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>{{titleModal}}
                <button class="modal-close" @click="$emit('close')" title="Fechar"></button>
            </h3>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')" title="Fechar">Cancelar</button>
            <button type="button" class="btn btn-primary" @click="$emit('save')">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    titleModal: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 580px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  .modal-header{
    background: #253f50;
    padding: 15px;

    h3{
      font-size: 16px;
      color: #e8e8e8;
      margin: 0;
    }
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-close {
    float: right;
    width: 20px;
    height: 20px;
    border: 0 none;
    font-size: 0;
    line-height: 0;
    background: url('../../assets/img/ico-close.png') no-repeat top center;
    &:hover{
      opacity: 0.8;
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .btn{
    color: #FFF;
    border-bottom: solid 3px #FFF;
    border-width: 0 0 3px;
    &.btn-primary{
      border-color: #00619f;
    }
    &.btn-secondary{
      border-color: #7f8d93;
      &:hover{
        background:#7f8d93;
      }
    }
  }

</style>
