<template>
  <div>
    <nav class="split-nav">
      <div class="nav-brand">
        <h3><a href="/" class="nav-link">KrapokeCode</a></h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <button>
          <label for="collapsible1">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </label>
        </button>
        <div class="collapsible-body">
          <ul class="inline">
            <li><a href="/ramble" class="nav-link">เล่าไปเรื่อย</a></li>
            <li><a href="/series" class="nav-link">เล่าเป็นซีรีย์</a></li>
            <li><a href="/about" class="nav-link">เกี่ยวกับพวกเรา</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="post">
      <slot />
    </div>
  </div>
</template>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
.nav-link {
  font-family: 'Mali', cursive !important;
  font-size: 18px !important;
  border-bottom: 5px solid #ffc107 !important;
}

body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  font-size: 16px;
  padding: 0;
}

.post{
  width: 90%;
  margin: auto;
}
.heading-link {
  color: black;
  text-decoration: none;
}

.heading {
  margin-bottom: 20px;
  font-family: 'Mali', cursive;
  font-weight: bold;
}
</style>
