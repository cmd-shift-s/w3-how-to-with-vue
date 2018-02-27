<template lang="html">
  <page
    title="CSS/JS Modal"
    intro="a Modal Box with CSS and JavaScript"
    class="modal-boxes-page">

    <template slot="header">
    <h2 class="title">How To Create a Modal Box</h2>
    <p>A modal is a dialog box/popup window that is displayed on top of the current page:</p>
    </template>

    <sample>
      <button class="btn-modal" @click="modal.isActive = true">Open Modal</button>
      <modal-box :is-active.sync="modal.isActive" is-closable>
        <div class="modal-header">
          <span class="close" @click="modal.isActive = false">&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div class="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </modal-box>
    </sample>

    <template slot="examples">
    <hr>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    <h2 class="title">Add Header and Footer</h2>
    <p>Add a class for modal-header, modal-body, and modal-footer:</p>
    <example-code :code="examples[3]"></example-code>
    <p>Style the modal header, body and footer, and add animation (slide in the modal):</p>
    <example-code :code="examples[4]"></example-code>
    <h2 class="title">Bottom Modal ("Bottom sheets")</h2>
    <p>An example on how to create a full-with modal that slides in from the bottom:</p>
    <example-code>
      <sample>
        <iframe src="#examples/more/bottom-modal" frameborder="0" width="100%" height="500px"></iframe>
      </sample>
    </example-code>
    </template>
  </page>
</template>

<script>
import ModalBox from '@/components/more/ModalBox.vue'

export default {
  name: 'modal-boxes-page',
  data: () => ({
    modal: {
      isActive: false
    },
    examples: [
      [
        '``` html',
        '<!-- Trigger/Open The Modal -->',
        '<button id="myBtn">Open Modal</button>',
        '',
        '<!-- The Modal -->',
        '<div id="myModal" class="modal">',
        '',
        '  <!-- Modal content -->',
        '  <div class="modal-content">',
        '    <span class="close">&times;</span>',
        '    <p>Some text in the Modal..</p>',
        '  </div>',
        '',
        '</div>',
        '```'
      ],
      [
        '``` css',
        '/* The Modal (background) */',
        '.modal {',
        '  display: none; /* Hidden by default */',
        '  position: fixed; /* Stay in place */',
        '  z-index: 1; /* Sit on top */',
        '  left: 0;',
        '  top: 0;',
        '  width: 100%; /* Full width */',
        '  height: 100%; /* Full height */',
        '  overflow: auto; /* Enable scroll if needed */',
        '  background-color: rgb(0,0,0); /* Fallback color */',
        '  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */',
        '}',
        '',
        '/* Modal Content/Box */',
        '.modal-content {',
        '  background-color: #fefefe;',
        '  margin: 15% auto; /* 15% from the top and centered */',
        '  padding: 20px;',
        '  border: 1px solid #888;',
        '  width: 80%; /* Could be more or less, depending on screen size */',
        '}',
        '',
        '/* The Close Button */',
        '.close {',
        '  color: #aaa;',
        '  float: right;',
        '  font-size: 28px;',
        '  font-weight: bold;',
        '}',
        '',
        '.close:hover,',
        '.close:focus {',
        '  color: black;',
        '  text-decoration: none;',
        '  cursor: pointer;',
        '}',
        '```'
      ],
      [
        '``` js',
        '// Get the modal',
        'var modal = document.getElementById("myModal");',
        '',
        '// Get the button that opens the modal',
        'var btn = document.getElementById("myBtn");',
        '',
        '// Get the <span> element that closes the modal',
        'var span = document.getElementsByClassName("close")[0];',
        '',
        '// When the user clicks on the button, open the modal ',
        'btn.onclick = function() {',
        '  modal.style.display = "block";',
        '}',
        '',
        '// When the user clicks on <span> (x), close the modal',
        'span.onclick = function() {',
        '  modal.style.display = "none";',
        '}',
        '',
        '// When the user clicks anywhere outside of the modal, close it',
        'window.onclick = function(event) {',
        '  if (event.target == modal) {',
        '    modal.style.display = "none";',
        '  }',
        '}',
        '```'
      ],
      [
        '``` html',
        '<!-- Modal content -->',
        '<div class="modal-content">',
        '  <div class="modal-header">',
        '    <span class="close">&times;</span>',
        '    <h2>Modal Header</h2>',
        '  </div>',
        '  <div class="modal-body">',
        '    <p>Some text in the Modal Body</p>',
        '    <p>Some other text...</p>',
        '  </div>',
        '  <div class="modal-footer">',
        '    <h3>Modal Footer</h3>',
        '  </div>',
        '</div>',
        '```'
      ],
      [
        '``` css',
        '/* Modal Header */',
        '.modal-header {',
        '  padding: 2px 16px;',
        '  background-color: #5cb85c;',
        '  color: white;',
        '}',
        '',
        '/* Modal Body */',
        '.modal-body {padding: 2px 16px;}',
        '',
        '/* Modal Footer */',
        '.modal-footer {',
        '  padding: 2px 16px;',
        '  background-color: #5cb85c;',
        '  color: white;',
        '}',
        '',
        '/* Modal Content */',
        '.modal-content {',
        '  position: relative;',
        '  background-color: #fefefe;',
        '  margin: auto;',
        '  padding: 0;',
        '  border: 1px solid #888;',
        '  width: 80%;',
        '  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);',
        '  animation-name: animatetop;',
        '  animation-duration: 0.4s;',
        '}',
        '',
        '/* Add Animation */',
        '@keyframes animatetop {',
        '  from {top: -300px; opacity: 0}',
        '  to {top: 0; opacity: 1}',
        '}',
        '```'
      ]
    ]
  }),
  components: {
    ModalBox
  }
}
</script>

<style lang="scss">
.modal-boxes-page {

  .btn-modal {
    color: white;
    background-color: #616161;
    font-size: 17px;
    padding: 12px 35px;
    text-decoration: none;
    border: none;
    cursor: pointer;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  }

  .modal-box {
    padding-top: 100px;

    .modal-content {
      animation-name: animatetop;
      animation-duration: 0.4s;
    }
  }

  /* Add Animation */
  @keyframes animatetop {
      from {top: -300px; opacity: 0}
      to {top: 0; opacity: 1}
  }
}
</style>
