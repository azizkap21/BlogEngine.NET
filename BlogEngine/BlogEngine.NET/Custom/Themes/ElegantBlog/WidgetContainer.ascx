<%@ Control Language="C#" AutoEventWireup="true" Inherits="App_Code.Controls.WidgetContainer" %><div class="Widget <%= Widget.Name.Replace(" ", String.Empty).ToLowerInvariant() %>"  id="widget<%= Widget.WidgetId %>">    <% if (this.Widget.ShowTitle)  { %>   <h4 class="WidgetTitle"><%= Widget.Title%></h4>    <% } %><div class="WidgetContnet"><asp:PlaceHolder ID="phWidgetBody" runat="server"></asp:PlaceHolder><div><%= AdminLinks %></div></div></div>
