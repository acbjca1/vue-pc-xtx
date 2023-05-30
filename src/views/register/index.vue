<template>
  <RegisterHeader>欢迎注册</RegisterHeader>
  <RegisterContent />
  <RegisterFooter />
</template>

<script>
import RegisterHeader from './components/register-header'
import RegisterFooter from './components/register-footer'
import RegisterContent from './components/register-content'
export default {
  name: 'Register',
  components: {
    RegisterHeader,
    RegisterFooter,
    RegisterContent
  }
}
</script>

<style lang="less" scoped>
</style>
