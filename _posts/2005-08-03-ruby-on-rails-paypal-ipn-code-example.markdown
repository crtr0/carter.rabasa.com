--- 
wordpress_id: 468
layout: post
title: Ruby on Rails PayPal IPN Code Example
date: "2005-08-03T14:19:00+00:00"
tags: 
- Uncategorized
- rails
- ruby
- paypal
- integration
wordpress_slug: ruby-on-rails-paypal-ipn-code-example
wordpress_url: http://cubanlinks.org/2006/11/30/ruby-on-rails-paypal-ipn-code-example
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/ruby-on-rails-paypal-ipn-code-example](http://cubanlinks.org/2006/11/30/ruby-on-rails-paypal-ipn-code-example) &laquo;

<p>I thought I&#8217;d share the skeleton of some code I had to write for PayPal&#8217;s backend <span class="caps">IPN API</span>.</p>


<textarea cols="60" rows="10">
  # process the PayPal <span class="caps">IPN POST</span>
  def paypal_ipn
     if @request.method == :post
       # use the POSTed information to create a call back <span class="caps">URL</span> to PayPal
       @query = &#8216;cmd=_notify-validate&#8217;
       @request.params.each_pair {|key, value| @query = @query + &#8217;&amp;&#8217; + key + &#8217;=&#8217;
 + value.first if key != &#8216;register/pay_pal_ipn.html/pay_pal_ipn&#8217; }

<ol>
<li><span class="caps">POST</span> this data
       http = Net::HTTP.start(PAYPAL_URL, 80)
       response = http.post(&#8217;/cgi-bin/webscr&#8217;, @query)
       http.finish</li>
</ol>


# PayPal values
       item_name = @params[:item_name]
       item_number = @params[:item_number]
       payment_status = @params[:payment_status]
       payment_amount = @params[:mc_gross]
       payment_currency = @params[:mc_currency]
       txn_id = @params[:txn_id]
       receiver_email = @params[:receiver_email]
       payer_email = @params[:payer_email]<br/><br/>       if response
          if response.body.chomp  'VERIFIED'
             # check the payment status
             if payment_status  &#8216;Completed&#8217;
                # check to see if the txn_id already exists

           # your logic here
          end
       end
     else
        # <span class="caps">GET</span> request, wtf
        @text = &#8216;I do not speak <span class="caps">GET</span>&#8217;
     end
  rescue Net::HTTPError
     @text = &#8216;HTTP error&#8217;
  end
</textarea>

<p>This method exists inside of a controller class.  I&#8217;m certainly not saying that this is the best or most elegant way to handle this, just that I couldn&#8217;t find any examples to rip-off myself.  :)<br/><br/>Let me know if you have any suggestions. <span class="caps">WARNING</span>: this code does not communicate with PayPal&#8217;s servers over <span class="caps">SSL</span>.</p>
